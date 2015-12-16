import requests as req

class REST_tester(object):
  def __init__(self, second):
		print ("Initializing REST_tester" + second)

	def main(self):
		print "Encaging main-loop."

if __name__ == '__main__':
	tester = REST_tester(" for testing")
	tester.main()