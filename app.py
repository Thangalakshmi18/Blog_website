# app.py
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    # Renders the index.html template when someone visits the homepage
    return render_template('index.html')

if __name__ == '__main__':
    # Run the Flask development server
    # debug=True allows changes to refresh automatically and shows errors
    app.run(debug=True)