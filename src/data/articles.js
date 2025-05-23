
const articles = [
    {
        id: "1",
        title: "Using Google Earth Engine to Find Barrier Against Wind Terrain using Wind Direction and Elevation",
        shortTitle: "Terrain Analysis Using GEE",
        subtitle: "Using Google Earth Engine to Find Barrier Against Wind Terrain using Wind Direction and Elevation",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*i7ZHENVI2yXTvg6W",
        tags: ['Google Earth Engine', 'JavaScript', 'Image Processing', 'Time Series'],
        fullDescription: "This article explores how Google Earth Engine (GEE) can be used to identify natural terrain barriers that function like windbreaks, using wind direction and elevation data. By analyzing elevation from SRTM data and wind direction from ERA5-Land datasets, the method highlights terrain features aligned perpendicularly to prevailing winds. Areas with strong alignment and steep slopes are masked and visualized to pinpoint effective natural wind barriers. Despite its utility, the approach faces limitations due to data resolution, slope/aspect noise, and temporal variability in wind patterns.",
        deployment: "https://ee-zukozaragosa2003.projects.earthengine.app/view/winddirelevationperpendicularalignment",
        repository: "https://github.com/jzaragosa06/agroforestry_windbreak_system",
        source: "https://medium.com/@junjunzaragosa2309/using-google-earth-engine-to-find-barrier-against-wind-terrain-using-wind-direction-and-elevation-3c5b9fb45ad2",
    },
    {
        id: "2",
        title: "Google Earth Engine & Python: Extracting Climate Data for Specific Region",
        shortTitle: "Extracting data Using GEE",
        subtitle: "Google Earth Engine & Python: Extracting Climate Data for Specific Region",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*OPlUdxUtFY08IUAuX1VgFw.jpeg",
        tags: ['Google Earth Engine', 'Python', 'Image Processing'],
        fullDescription: "This article explores the use of Google Earth Engine (GEE) to identify natural terrain features that act as wind barriers by analyzing elevation and wind direction data. Using SRTM DEM for elevation and ERA5-Land for wind data, the author computes terrain alignment with wind to highlight areas with strong resistance to wind. The method involves calculating slope, aspect, and cosine similarity between terrain orientation and wind direction to isolate optimal zones. Despite its utility, the approach is limited by the resolution of available datasets and challenges with low-relief terrain and wind variability.",
        deployment: "",
        repository: "",
        source: "https://medium.com/@junjunzaragosa2309/extracting-climatic-historical-data-from-google-earth-engine-using-python-api-for-a-specific-land-f2dc3b350cd7",
    },
    {
        id: "3",
        shortTitle: "Using AI for Node Graph",
        title: "Using LLM to Generate Data for D3.js Force Directed Graph (FDG)",
        subtitle: "Using LLM to Generate Data for D3.js Force Directed Graph (FDG)",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*urTF0yqArBGT9Qct8zd6eg.png",
        tags: ['Node Graph', 'Node.Js', 'Express.js', 'Gemini', 'EJS'],
        fullDescription: "explores how to use a large language model (LLM), specifically Google's Gemini, to generate data for a D3.js force-directed graph. It explains the core components needed for such visualizations—nodes and links—and how they represent entities and relationships.",
        deployment: "",
        repository: "",
        source: "https://medium.com/@junjunzaragosa2309/using-llm-to-generate-data-for-d3-js-force-directed-graph-c490382d1172",
    },
    {
        id: "4",
        shortTitle: "Websraping using Python & BeautifulSoup",
        title: "Web Scraping Real Estate Data with Python and BeautifulSoup",
        subtitle: "Web Scraping Real Estate Data with Python and BeautifulSoup",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:750/format:webp/0*W3VnqUyf6KHom7Of",
        tags: ['Web Scraping', 'Beautiful Soup', 'Python',],
        fullDescription: "This article highlights the importance of real estate data in market research and investment decisions. It explains how manual data collection from websites is inefficient and introduces web scraping as a solution. Using Python’s BeautifulSoup library, the article demonstrates how to automate the extraction of property listings and prices. A specific example focuses on scraping real estate data from Lamudi.com for the Ilocos Region in the Philippines.",
        deployment: "",
        repository: "",
        source: "https://medium.com/@junjunzaragosa2309/web-scraping-real-estate-data-with-python-and-beautifulsoup-c51b35f4ad4d",
    },
    {
        id: "6",
        shortTitle: "Naïve Approach to Combining Time Series Data",
        title: "Naïve Approach to Combining Time Series Data",
        subtitle: "Naïve Approach to Combining Time Series Data",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:750/format:webp/1*maWEGaIxD8CqHQQ_3vE71w.png",
        tags: ['Merging', 'Time Series Data', 'Python', 'Pandas'],
        fullDescription: "This article discusses how to combine multivariate time series data in Python when datasets have mismatched time indices. Using Pandas, the data is read and converted into arrays, then dictionaries for efficient merging based on shared date values. A unified set of all unique dates is used to align the data, filling in missing values where necessary. The final combined dataset maintains structural consistency and can be saved as a CSV file with appropriate column headers.",
        deployment: "",
        repository: "",
        source: "https://medium.com/@junjunzaragosa2309/na%C3%AFve-approach-to-combining-time-series-data-c7cfbbf070a3",
    },
    {
        id: "7",
        shortTitle: "Protein Sequence Alignment with Python",
        title: "Finding Similar Protein Sequences with BLAST in Python",
        subtitle: "Finding Similar Protein Sequences with BLAST in Python",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*x3dnBXkNR4VDQ-rFHfIJIw.png",
        tags: ['BLAST', 'Python', 'Protein Sequences', 'Protein', 'Amino Acid',],
        fullDescription: "Proteins are essential macromolecules made of amino acid chains, and their sequence determines both structure and function. Understanding protein sequences is key in fields like bioinformatics, especially for solving challenges such as the protein folding problem. Identifying similar protein sequences allows scientists to infer functions and evolutionary relationships. This article explores how to use the BLAST tool and Python for analyzing protein sequence similarity.",
        deployment: "",
        repository: "",
        source: "https://medium.com/@junjunzaragosa2309/finding-similar-protein-sequences-with-blast-in-python-da7c383cb9ff",
    },
    {
        id: "8",
        shortTitle: "Stocks & Market Index Correlation Analysis",
        title: "Stocks & Market Index Correlation Analysis",
        subtitle: "Stocks & Market Index Correlation Analysis",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*LQnSXGw7vZMBi03I0o7-SQ.png",
        tags: ['Stock', 'Market Index', 'Correlation Analysis', 'Python'],
        fullDescription: "This article explores how to analyze the correlation between individual stock prices and a market index using Python. It leverages the yfinance package to retrieve historical financial data from Yahoo Finance. The project focuses on calculating daily returns and correlation coefficients, using Apple stock and the S&P 500 index between January 1, 2020, and June 26, 2024. Adjusted closing prices are used for more accurate correlation analysis, accounting for corporate actions.",
        deployment: "",
        repository: "",
        source: "https://medium.com/@junjunzaragosa2309/stocks-market-index-correlation-analysis-530e81f33aba",
    },
    {
        id: "9",
        shortTitle: "Analysing PSEi Using Python",
        title: "Analysis of Philippine Stock Exchange Index’s (PSEi) Performance Over the Year Using Python",
        subtitle: "Analysis of Philippine Stock Exchange Index’s (PSEi) Performance Over the Year Using Python",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5NyBXJWMrj9UAHUqRnJFgQ.png",
        tags: ['Python', 'Moving Average', 'Stock Returns', 'Stock Analysis'],
        fullDescription: "This presents an analysis of the Philippine Stock Exchange Index (PSEi) using a year-long dataset of closing prices sourced from Yahoo Finance. Conducted in Python, the analysis highlights trends and fluctuations in the PSEi from June 18, 2023, to June 18, 2024, despite some missing values in the data. The PSEi, composed of 30 leading companies across six sectoral indices, serves as a key indicator of the Philippine stock market's overall performance. By examining this time series data, this offers valuable insights into the market dynamics over the year.",
        deployment: "",
        repository: "",
        source: "https://medium.com/@junjunzaragosa2309/philippine-stock-exchange-index-analysis-of-pseis-performance-over-the-year-using-python-b4293dd22a96",
    },
    {
        id: "10",
        shortTitle: "Time Series Forecast with AI",
        title: "Using Large Language Model to Provide Context-Specific Explanation to Time Series Forecast",
        subtitle: "Using Large Language Model to Provide Context-Specific Explanation to Time Series Forecast",
        description: "",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*kW5J2hGVLRnB9NiuJHBo5Q.png",
        tags: ['Python', 'Laravel', 'PHP', 'Time Series', 'Context-based Explantion', 'Gemini', 'Forecast'],
        fullDescription: "This article explores the integration of Large Language Models (LLMs) with machine learning-based time series forecasting methods like XGBoost. Traditional forecasting models are often accurate but hard to interpret, while modern ML models, though powerful, act as “black boxes.” The project aims to enhance interpretability by using LLMs, such as Google’s Gemini, to generate context-specific explanations for predictions. By allowing users to input relevant context, the system helps make forecast results more understandable and actionable.",
        deployment: "",
        repository: "",
        source: "https://medium.com/@junjunzaragosa2309/using-large-language-model-to-provide-context-specific-explanation-to-time-series-forecast-69a701abb40a",
    },
];

export default articles;