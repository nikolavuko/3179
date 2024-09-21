var vg_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 450,
    "title": "Amount of ATP Tournaments Won per Country (2000-2024)",
    "projection": {"type": "equalEarth"},
    "layer": [
      {
        "data": {
          "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/2_symbol_map/js/ne_110m_admin_0_countries.topojson",
          "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
        },
        "mark": {"type": "geoshape", "fill": "#f0f0f0", "stroke": "white"}
      },
      {
        "data": {
          "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/2_symbol_map/js/ne_110m_admin_0_countries.topojson",
          "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
        },
        "transform": [
          {
            "lookup": "properties.ISO_A3",
            "from": {
              "data": {
                "values": [
                  {"Country": "AUS", "Wins": 50},
                  {"Country": "FRA", "Wins": 88},
                  {"Country": "SWE", "Wins": 32},
                  {"Country": "USA", "Wins": 134},
                  {"Country": "GER", "Wins": 56},
                  {"Country": "SUI", "Wins": 121},
                  {"Country": "AUT", "Wins": 24},
                  {"Country": "BRA", "Wins": 20},
                  {"Country": "ARG", "Wins": 69},
                  {"Country": "ESP", "Wins": 229},
                  {"Country": "RUS", "Wins": 106},
                  {"Country": "CHI", "Wins": 28},
                  {"Country": "ROU", "Wins": 3},
                  {"Country": "NED", "Wins": 13},
                  {"Country": "BEL", "Wins": 13},
                  {"Country": "GBR", "Wins": 65},
                  {"Country": "RSA", "Wins": 11},
                  {"Country": "CZE", "Wins": 29},
                  {"Country": "SVK", "Wins": 11},
                  {"Country": "ITA", "Wins": 27},
                  {"Country": "CRO", "Wins": 46},
                  {"Country": "ECU", "Wins": 2},
                  {"Country": "MAR", "Wins": 4},
                  {"Country": "COL", "Wins": 2},
                  {"Country": "THA", "Wins": 5},
                  {"Country": "DEN", "Wins": 1},
                  {"Country": "BLR", "Wins": 3},
                  {"Country": "FIN", "Wins": 2},
                  {"Country": "PER", "Wins": 2},
                  {"Country": "SRB", "Wins": 108},
                  {"Country": "CYP", "Wins": 4},
                  {"Country": "JPN", "Wins": 17},
                  {"Country": "UKR", "Wins": 4},
                  {"Country": "LAT", "Wins": 6},
                  {"Country": "KAZ", "Wins": 6},
                  {"Country": "CAN", "Wins": 14},
                  {"Country": "POR", "Wins": 4},
                  {"Country": "BUL", "Wins": 9},
                  {"Country": "URU", "Wins": 6},
                  {"Country": "DOM", "Wins": 3},
                  {"Country": "UZB", "Wins": 2},
                  {"Country": "LUX", "Wins": 2},
                  {"Country": "BIH", "Wins": 4},
                  {"Country": "HUN", "Wins": 2},
                  {"Country": "GEO", "Wins": 5},
                  {"Country": "GRE", "Wins": 10},
                  {"Country": "MDA", "Wins": 1},
                  {"Country": "NOR", "Wins": 12}
                ]
              },
              "key": "Country",
              "fields": ["Wins"]
            }
          }
        ],
        "mark": {"type": "geoshape", "stroke": "white"},
        "encoding": {
          "color": {
            "field": "Wins",
            "type": "quantitative",
            "scale": {
              "type": "threshold",
              "domain": [10, 30, 60, 100, 150],
              "range": ["#bdd7e7", "#6baed6", "#3182bd", "#08519c", "#08306b", "#03182b"]
            },
            "title": "Tournaments Won"
          },
          "tooltip": [
            {"field": "properties.NAME", "type": "nominal", "title": "Country"},
            {"field": "Wins", "type": "quantitative", "title": "Tournaments Won"}
          ]
        }
      }
    ]
  };
  
  vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  