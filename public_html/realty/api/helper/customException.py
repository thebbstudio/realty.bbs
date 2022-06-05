from rest_framework.exceptions import APIException


class Http401(APIException):
    status_code = 401
    default_detail = 'Service temporarily unavailable, try again later.'
    default_code = 'service_unavailable'


class Http403_data(APIException):
    status_code = 403
    default_detail = 'Service temporarily unavailable, try again later.'
    default_code = 'service_unavailable'


class Http403_token(APIException):
    status_code = 403
    default_detail = 'Service temporarily unavailable, try again later.'
    default_code = 'service_unavailable'


class Http403(APIException):
    status_code = 404
    default_detail = 'Service temporarily unavailable, try again later.'
    default_code = 'service_unavailable'