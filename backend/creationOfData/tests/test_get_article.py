#!/usr/bin/python3

"""
this code is used to test the getarticle function
"""
import importlib
import requests
import pep8
from tools.get_article import get_article
import unittest
from unittest.mock import patch


class TestGetArticle(unittest.TestCase):
    """
    the class used in testing the function
    """
    def test_get_article_module_docstring(self):
        """
        test for the pydoc in script
        """
        get_article = importlib.import_module("tools.get_article")
        self.assertIsNot(get_article.__doc__, None,
                         "get_article needs docstrings")
        self.assertTrue(len(get_article.__doc__) >= 5,
                        "get_article docstrings should not be empty or short")

    def test_get_article_pep8(self):
        """
        class used to check the pep8 of the  script
        """
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['tools/get_article.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_get_article_docstrint(self):
        """
        tests get_article if it has the documentation
        """
        self.assertTrue(len(get_article.__doc__) > 5,
                        "get_article function should have documentation")

    @patch("requests.get")
    def test_get_article_success(self, mock_get):
        """
        it is used to test the get_article if it is successfull
        """
        mock_response = mock_get.return_value
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "query": {
                "pages": {
                    "123": {
                        "title": "Test Article",
                        "extract": "This is a test article."
                    }
                }
            }
        }

        result = get_article("Test Article")

        self.assertEqual(result["place"], "Test Article")
        self.assertEqual(result["article"], "This is a test article.")

    @patch("requests.get")
    def test_get_article_not_found(self, mock_get):
        """
        tests the get_article if its not found
        """
        mock_response = mock_get.return_value
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "query": {
                "pages": {
                    "123": {
                        "title": "Not Found",
                        "missing": True
                    }
                }
            }
        }

        result = get_article("Not Found")

        self.assertIsNone(result)

    @patch("requests.get")
    def test_get_article_request_failure(self, mock_get):
        """
        tests get_article if the API has failed to give a response
        """

        result = get_article("Test Article")

        self.assertIsNone(result)
