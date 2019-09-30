# endangered-species-
endangered-species 

# Project Overview


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sep 30th| Project Approval - Pseudocode and start Structure | Incomplete
|Oct 1st| Finish structure  and start Logic  | Incomplete
|Oct 2nd| Finish logic and start CSS | Incomplete
|Oct 3rd| CSS and any post MVP work | Incomplete
|Oct 4th| Presentation Day - project finished  | Incomplete

## Project Description

Web app where users can search for endangered species and learn about them. Post MVP will have ways to help out your the endangered species of your choice or fight a common threat.

## Wireframes

Mobile: https://wireframe.cc/UXR2uC
Web: https://wireframe.cc/AwHxep

## API Snippet

```
{
  "common_name": "Semi-collared Hawk",
  "scientific_name": "Accipiter collaris",
  "vulnerability_status": "vulnerable",
  "citation": "Campbell, J. 2007. Abronia oaxacae. The IUCN Red List of Threatened Species 2007: e.T63685A12697055. http://dx.doi.org/10.2305/IUCN.UK.2007.RLTS.T63685A12697055.en",
  "conservation_measure": "Resource & habitat protection",
  "video_url": "https://www.youtube.com/watch?v=vy2RKH2v5_E",
  "imageLink": "http://faculty.ucr.edu/~chappell/INW/birds3raptors/semicollaredhawk019.jpg",
  "webLink": "http://apiv3.iucnredlist.org/api/v3/website/Accipiter collaris",
  "assoc_habitats": [
    "Forest - Subtropical/Tropical Moist Montane"
  ],
  "assoc_threats": [
    "Annual & perennial non-timber crops",
    "Agro-industry farming",
    "Livestock farming & ranching",
    "Agro-industry grazing, ranching or farming",
    "Work & other activities"
  ],
  "assoc_countries": [
    "Colombia",
    "Ecuador",
    "Peru",
    "Venezuela, Bolivarian Republic of"
  ]
}
```

### MVP/PostMVP - 5min

MVP:
- Find and use external api 
- Render data on page 
-Display a full list of endangered animals
-Be able to search for a specific animal by name, threat, habitat, or country
-Get a random animal section

PMVP:
-have a 'favorites' section
-have a 'how you can help' section


## React Component Hierarchy


https://wireframe.cc/HPthoc

## Priority Matrix

https://wireframe.cc/0fQuPj

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | holds the app | 
| Header | will be the nav for the site (should always be there) | 
| Footer | hold dev contact info and possibly the nav | 
| AnimalList | This will render the header include the nav | 
| Search | This will render the footer include the nav | 
| RandomAnimal | This will render the header include the nav | 
| AnimalContainer | This will render the footer include the nav | 
| NotFound | This will render the footer include the nav | 


## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Design | H | 3hrs| :---: | :---: |
| Pseudocode | H | 3hrs| :---: | :---: |
| HTML structure | H | 6hrs| :---: | :---: |
| Get API keys and grab data | H | 1hr| :---: | :---: |
| implement api logic | M | 3hrs| :---: | :---: |
| implement javascript functionality | M | 6hrs| :---: | :---: |
| CSS styling | M | 10hrs| :---: | :---: |
| Total | H | 32hrs| :---: | :---: |

## Additional Libraries
n/a 

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

