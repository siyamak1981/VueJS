# isdir function 

from urllib.parse import urlparse

o = urlparse('http://www.parsiankhazar.com')
print(o._replace(scheme='https'))