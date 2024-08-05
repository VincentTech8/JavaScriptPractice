import requests
from bs4 import BeautifulSoup

def draw_horizontal_grid_from_url(url):
    # Send a request to fetch the content of the URL
    response = requests.get(url)
    response.raise_for_status()

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find the table in the document
    table = soup.find('table')

    # Initialize an empty list to store the tuples
    table_data = []

    # Extract rows from the table
    for row in table.find_all('tr')[1:]:  # Skip the header row
        cols = row.find_all('td')
        x = int(cols[0].text.strip())
        unichar = cols[1].text.strip()
        y = int(cols[2].text.strip())
        table_data.append((x, y, unichar))

    # Determine the size of the grid
    max_x = max(x for x, y, unichar in table_data)
    max_y = max(y for x, y, unichar in table_data)

    # Initialize an empty grid
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    # Place the characters in the grid
    for x, y, unichar in table_data:
        grid[max_y - y][x] = unichar

    # Print the grid
    for row in grid:
        print(''.join(row))

# Example usage
url = 'https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub'
draw_horizontal_grid_from_url(url)
