#!/usr/bin/python3
"""
a unit test for the function used to add a new place
"""
import unittest
from unittest.mock import patch, mock_open
from add_new_place import add_new_place

class TestAddNewPlaceFunction(unittest.TestCase):

    @patch('builtins.input', return_value='TestPlace')
    @patch('add_new_place.get_article')
    @patch('add_new_place.get_images')
    def test_add_new_place(self, mock_get_images, mock_get_article, mock_input):
        # Mocking get_article and get_images functions
        mock_get_article.return_value = {'article': 'Test article'}
        mock_get_images.return_value = ['image1.jpg', 'image2.jpg']

        # Using mock_open directly and resetting it before each test case
        with patch('builtins.open', mock_open()) as m_open:
            # Calling the function with the mocked input
            place = "Rome"
            add_new_place(place)

            # Assertions
            m_open.assert_called()
            m_open.assert_called_once_with("../data/data.json", "w")
            self.assertEqual(m_open.call_count, 2)
            self.assertEqual(m_open.call_args_list, [
                unittest.mock.call("../data/data.json", "r"),
                unittest.mock.call("../data/data.json", "w"),
            ])

            handle = m_open().__enter__()
            handle.write.assert_called_once()

if __name__ == '__main__':
    unittest.main()
