#!/usr/bin/python3
""" used to test the log function """
import unittest
from datetime import datetime
from tools.log import log

class TestLogFunction(unittest.TestCase):
    """ the class where the tests are conducted """
    def test_log_writes_to_file(self):
        """ tests the log function by writint to file """
        log_dict = {
            'successful': ['log1', 'log2'],
            'article_unsuccessful': ['log3'],
            'image_unsuccessful': ['log4', 'log5']
        }
        result = log(log_dict)

        self.assertEqual(result, 1)

        # Read the contents of the log file to check if the logs are written correctly
        with open("query.log", "r") as f:
            log_content = f.read()

        # Assert that the time and log lists are present in the log file
        self.assertIn(f"The time queried was", log_content)
        self.assertIn("The successful list is: ['log1', 'log2']", log_content)
        self.assertIn("The article_unsuccessful list is: ['log3']", log_content)
        self.assertIn("The image_unsuccessful list is: ['log4', 'log5']", log_content)
        self.assertIn("\n\n", log_content)

    def test_log_handles_exceptions(self):
        """  Simulate an exception in the log function """
        def mock_open(*args, **kwargs):
            raise Exception("Mock exception in open")

        log_dict = {
            'successful': ['log1', 'log2'],
            'article_unsuccessful': ['log3'],
            'image_unsuccessful': ['log4', 'log5']
        }

        # Replace the built-in open function with the mock_open function
        with unittest.mock.patch('builtins.open', side_effect=mock_open):
            result = log(log_dict)

        self.assertEqual(result, 0)  # Assert that the function returns 0 on exception
