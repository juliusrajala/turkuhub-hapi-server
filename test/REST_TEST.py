#-*- coding: latin1 -*-

import requests as req

class REST_tester(object):
  def __init__(self, second):
    print ("Initializing REST_tester" + second)
    self.hostAddress = "http://localhost:3000"
    self.apiPath = {
      1 : "/test",
      2 : "/android/get/testi+lause+bussi+johonkin+skanssiin",
      3 : "/android/deliver_all_bus_data",
      4 : "/test/"
    }

  def test_api_no_params(self, value):
    r = req.get(self.hostAddress+value)
    print r.text

  def test_api_params(self, params):
    print params
    queryType = int(params[0])
    if(params[1] == " "):
      params = params[2:]
    else:
      params = params[1:]
    params = params.split(" ")
    params = "+".join(params)
    r = req.get(self.hostAddress+self.apiPath[queryType]+params)
    print isinstance(r.text, unicode)
    readable = " ".join(r.text.split('%2B'))
    print readable

  def main(self):
    print "Encaging main-loop."
    while True:
      """
      Choose 1 for GET without params
      Choose 2 for GET with params
      Choose 3 for POST
      """
      api_call = raw_input(">>")
      if(len(api_call)>1):
        self.test_api_params(api_call)
      else: 
        try:
          api_call = int(api_call)
          self.test_api_no_params(self.apiPath[api_call] if api_call in self.apiPath else self.apiPath[1])
        except ValueError:
          print "Invalid value"
        except TypeError:
          print "Invalid type"

if __name__ == '__main__':
  tester = REST_tester(" for testing")
  tester.main()