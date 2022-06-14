from django.urls import path, include
from .views import * 
from django.conf.urls.static import static

urlpatterns = [
    path('getdatarealty/', GetDataRealty.as_view()),
    path('putrealty', PutRealty.as_view()),

    path('getdataonerealty', GetDataOneRealty.as_view()), #
    path('getdatarealty', GetDataRealty.as_view()), #
    path('createrealty', CreateRealty.as_view()), #
    path('auth', AuthView.as_view()),
    
    path('editdatarealty', PutRealty.as_view()),
    path('deleterealty', DeleteRealty.as_view()),

    

    path('checktoken', CheckTokenView.as_view()),
    path('createuser', CreateUser.as_view())
]