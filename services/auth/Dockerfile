FROM demo_db
MAINTAINER Christian Grabowski (github.com/cpg1111)
ADD . /opt/src/
RUN pip install klein==15.3.1 twisted==16.2.0
ENTRYPOINT ["/opt/src/run.sh"]
