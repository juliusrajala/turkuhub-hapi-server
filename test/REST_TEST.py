#-*- coding: utf-8 -*-

import requests as req

class REST_tester(object):
  def __init__(self, second):
    print ("Initializing REST_tester" + second)
    self.hostAddress = "http://localhost:3000"
    self.apiPath = {
      1 : "/test",
      2 : "/android/get/testi+lause+bussi+johonkin+skanssiin",
      3 : "/android/deliver_all_bus_data"
    }

  def test_api(self, path):
    req.get(self.hostAddress+path.encode("utf-8"))

  def main(self):
    print "Encaging main-loop."
    while True:
      """
      Choose 1 for GET without params
      Choose 2 for GET with params
      Choose 3 for POST
      """
      api_call = raw_input(">>")
      try:
        self.test_api(self.apiPath[int(api_call)] if int(api_call) in self.apiPath else self.apiPath[1])
      except ValueError:
        print "Invalid value"
      except TypeError:
        print "Invalid type"

if __name__ == '__main__':
  tester = REST_tester(" for testing")
  tester.main()