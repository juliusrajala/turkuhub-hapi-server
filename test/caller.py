import requests as req

class REST_tester(object):
  def __init__(self, second):
		print ("Initializing REST_tester" + second)
    self.apiPath = "http://localhost:3000"

  def test_api(self, request):
    req.get(self.apiPath+"/test/")

	def main(self):
		print "Encaging main-loop."
    while True:
      """
      Choose 1 for GET without params
      Choose 2 for GET with params
      Choose 3 for POST
      """
      api_call = input(">>")
      test_api("A")


if __name__ == '__main__':
	tester = REST_tester(" for testing")
	# tester.main()