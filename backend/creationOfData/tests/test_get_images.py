#!/usr/bin/python3

"""
this are unitests for the function get_images
"""
import importlib
import requests
from tools.get_images import get_images
import pep8
import unittest
from unittest.mock import patch

class TestGetImages(unittest.TestCase):
    """
    unittests:
        pep8
        pydoc
        successful
        not found
        error with api
    """

    def test_pydoc_on_module(self):
        """
        tests pydoc in module
        """
        get_images = importlib.import_module("tools.get_images")
        self.assertTrue(len(get_images.__doc__) > 5,
                        "invalid documentation on module")

    def test_pydoc_on_function(self):
        """
        tests pydoc on function
        """
        self.assertTrue(len(get_images.__doc__) > 5,
                        "invalid documentation on function")

    def test_pep8_on_module(self):
        """
        tests pep8 on module
        """
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(["./tools/get_images.py"])
        self.assertEqual(result.total_errors, 0, "Pycodestyle error on module")

    @patch("requests.get")
    def test_get_images_failure(self, mock_get):
        """
        used to tests the api retrieval failures
        """
        mock_response = mock_get.return_value
        mock_response.status_code = 404

        result = get_images("nonexistent", count=5)

        self.assertIsNone(result)
