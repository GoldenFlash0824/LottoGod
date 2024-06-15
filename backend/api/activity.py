from flask import request, jsonify
from api.config import app, mysql
from contextlib import contextmanager
from datetime import datetime
from flask_mysqldb import MySQLdb

@app.route('/api/lottery', methods=['GET'])
def get_lottery():
    state = request.args.get('state[state]')
    lottery_type = request.args.get('state[type]')
    start_date = request.args.get('state[startDate]')
    end_date = request.args.get('state[endDate]')
    page_num = request.args.get('state[pageNum]', 0)
    rows_per_page = request.args.get('state[rowsPerPage]', 10)

    try:
        start_date = datetime.strptime(start_date, "%Y-%m-%dT%H:%M:%S.%fZ")
        end_date = datetime.strptime(end_date, "%Y-%m-%dT%H:%M:%S.%fZ")
    except ValueError as e:
        return jsonify({"error": "Invalid date format"}), 400

    try:
        page_num = int(page_num)
        rows_per_page = int(rows_per_page)
    except ValueError as e:
        return jsonify({"error": "Invalid pagination parameters"}), 400

    start_date_str = start_date.strftime("%Y-%m-%d")
    end_date_str = end_date.strftime("%Y-%m-%d")

    table_name = f"{state}_{lottery_type}"
    offset = page_num * rows_per_page

    count_query = f"""
        SELECT COUNT(*) as total_count FROM {table_name}
        WHERE date >= %s AND date <= %s
    """

    sql_query = f"""
        SELECT * FROM {table_name}
        WHERE date >= %s AND date <= %s
        LIMIT {rows_per_page} OFFSET {offset}
    """

    try:
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(count_query, (start_date_str, end_date_str))
        count_result = cursor.fetchone()
        if count_result is None:
            total_count = 0
        else:
            total_count = count_result['total_count']

        cursor.execute(sql_query, (start_date_str, end_date_str))
        results = cursor.fetchall()
        return jsonify({"status": 200, "data": results, "total_count": total_count})
    except Exception as e:
        print("Database connection failed due to {}".format(e))
        return jsonify({"status": 400, "message": "Database Error"})