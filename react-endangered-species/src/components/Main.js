import NotFound from './components/NotFound'


<Switch>
            <Route exact path="/" component={Header}/>  
            <Route 
              exact path="/topNews" 
              render={() => <TopNews handleClick={this.grabArticleDeets}/>} 
            />
            <Route 
              exact path="/topNews/:details" 
              render={() => <ArticleContainer article={this.state.article}/>}
            />
            <Route 
              exact path="/oasisNews" 
              render={() => <OasisNews handleClick={this.grabArticleDeets}/>}
            />
            <Route 
              exact path="/oasisNews/:details" 
              render={() => <ArticleContainer article={this.state.article}/>}
            />
            <Route component={NotFound} />

          </Switch>