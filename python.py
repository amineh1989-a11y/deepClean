from flask import Flask, request, jsonify

app = Flask(__name__)

bookings = []

@app.route('/book', methods=['POST'])
def book():
    data = request.json
    bookings.append(data)

    return jsonify({"message": "تم الحجز بنجاح!"})

@app.route('/bookings', methods=['GET'])
def get_bookings():
    return jsonify(bookings)

if __name__ == '__main__':
    app.run(debug=True)