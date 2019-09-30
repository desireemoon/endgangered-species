# endangered-species-
endangered-species 

# Project Overview


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sep 30th| Project Approval - Pseudocode and start Structure | Complete
|Oct 1st| Finish structure  and start Logic  | Incomplete
|Oct 2nd| Finish logic and start CSS | Incomplete
|Oct 3rd| CSS and any post MVP work | Incomplete
|Oct 4th| Presentation Day - project finished  | Incomplete

## Project Description

Web app where users can learn about endangered animals. Post MVP will have ways to search and help out  the endangered species of your choice or fight a common threat.

## Wireframes

Mobile: https://wireframe.cc/UXR2uC
Web: https://wireframe.cc/AwHxep

## API Snippet

```
 "success": "true",
    "message": "list of species retrieved successfully",
    "allSpecies": [
        {
            "image": {
                "url": "/images/bengal-tiger_image.png",
                "licence": ""
            },
            "_id": "5d21dc7061161106c4023008",
            "name": "Bengal Tiger",
            "description": "The Bengal tiger lives in the Indian subcontinent. It is one of the biggest wild cats alive and is the national animal of India and Bangladesh. This species is at the top of the food chain in the wild and plays a vital link in maintaining the rich diversity of nature. It is listed as endangered species since 2008 and there are only about 2,500 individuals left. Most live in India, but there are a few hundered also in Bangladesh, Nepal and Bhutan. The species is threatened by poaching and loss of habitat caused by climat change. ",
            "status": "Endangered",
            "population": "2,500",
            "scientific_name": "Panthera tigris tigris",
            "location": "Southeast Asia",
            "habitat": "Tropical rainforests, marshes, and tall grasses",
            "status_legend": [
                {
                    "_id": "5d21dc7161161106c402300b",
                    "status": "Critically endangered",
                    "abbreviation": "CR",
                    "description": "Faces an extremely high risk of extinction in the immediate future."
                },
                {
                    "_id": "5d21dc7161161106c402300a",
                    "status": "Endangered",
                    "abbreviation": "EN",
                    "description": "Faces a high risk of extinction in the near future."
                },
                {
                    "_id": "5d21dc7161161106c4023009",
                    "status": "Vulnerable",
                    "abbreviation": "VU",
                    "description": "Faces a high risk of endangerment in the medium term."
                }
            ],
            "url": "bengal-tiger",
            "__v": 0
        },
```

### MVP/PostMVP - 5min

MVP:
- Find and use external api 
- Render data on page 
- Display a full list of endangered animals
- Get a random animal section

PMVP:
- Have a 'favorites' section
- Have a 'how you can help' section
- Be able to search for a specific animal by name, threat, habitat, or country



## React Component Hierarchy


https://wireframe.cc/HPthoc

## Priority Matrix

https://wireframe.cc/0fQuPj

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | holds the app - will hold state | 
| Header | will be the nav for the site (should always be there) | 
| Footer | hold dev contact info and possibly the nav | 
| Main | will hold animal list and random animal components | 
| AnimalList | List of all animals | 
| RandomAnimal | Show a random animal | 
| AnimalContainer | component that will render the info for list and random | 
| NotFound | redirect if user doesn't go to the right page  | 


## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Design | H | 3hrs| 1.5hrs | :---: |
| Pseudocode | H | 3hrs| :---: | :---: |
| HTML structure | H | 6hrs| :---: | :---: |
| Get API keys and grab data | H | 3hr| 5hrs | :---: |
| implement api logic | M | 3hrs| :---: | :---: |
| implement javascript functionality | M | 6hrs| :---: | :---: |
| CSS styling | M | 10hrs| :---: | :---: |
| Total | H | 34hrs| :---: | :---: |

## Additional Libraries
- react-router
- react-router-dom

## Code Snippet

```
 <div className="list-container">
                {this.state.articles.map((article) => (
                    <Link
                        key={article.source.id}
                        onClick={() => {this.props.handleClick(article)}}
                        to={`/topNews/${article.title}`}
                    ><div className="article-links"><p>{article.title}</p><img className="link-img" src={article.urlToImage}></img></div></Link>))}
            </div>
```

## Issues and Resolutions
**ERROR**: Had issues choosing and idea that would work with an API 
**RESOLUTION**: Made it api focused instead of idea focused

