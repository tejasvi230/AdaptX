from flask import Flask, request, send_file, render_template
from gtts import gTTS
import os

app = Flask(__name__,template_folder="template")


@app.route('/')
def index():
    return render_template("index.html")  # A simple HTML page with a form

@app.route('/speak', methods=['POST'])
def speak():
    text = request.form.get('text')
    
    if not text:
        return "Please enter text!", 400
    
    tts = gTTS(text)
    audio_file = "static/output.mp3"
    tts.save(audio_file)

    return render_template("index.html", audio_file=audio_file)

if __name__ == '__main__':
    app.run(debug=True)