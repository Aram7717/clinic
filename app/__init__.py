from flask import Flask
from config import DevelopmentConfig, ProductionConfig
# from flask_mail import Mail


app = Flask(__name__)


app.config.from_object(DevelopmentConfig)



from app import views
app.add_url_rule('/', endpoint='home',view_func=views.home)
app.add_url_rule('/about', endpoint='about',view_func=views.about)
app.add_url_rule('/contact', endpoint='contact',view_func=views.contact)
app.add_url_rule('/services', endpoint='services',view_func=views.services2)
