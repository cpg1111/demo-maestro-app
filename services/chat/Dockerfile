FROM demo_db
MAINTAINER Christian Grabowski (github.com/cpg1111)
ADD . /opt/src
RUN pip install autobahn==0.14.1 twisted==16.2.0
ENTRYPOINT ["/opt/src/run.sh"]
