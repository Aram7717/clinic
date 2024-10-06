from datetime import datetime
from flask import Flask, render_template, request, flash, redirect
from app import app







@app.route('/')
def home():
    date = datetime.now().year

    return render_template('home.html', date=date)



@app.route('/about')
def about():
    date = datetime.now().year
    return render_template('about.html', date=date)


@app.route('/contact')
def contact():
    date = datetime.now().year
    return render_template('contact.html', date=date)


def services2():
    date = datetime.now().year
    return render_template('services1.html', date=date)


