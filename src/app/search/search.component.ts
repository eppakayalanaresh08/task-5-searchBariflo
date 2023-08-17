import { Component } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  path:string='../assets/2977093.jpg'

  searchInput: string = '';
  suggestionsList: any[] = [
    {id: 1, suggestion: 'Price of Ethereum'},
    {id: 2, suggestion: 'Oculus Quest 2 specs'},
    {id: 3, suggestion: 'Tesla Share Price'},
    {id: 4, suggestion: 'Price of Ethereum today'},
    {id: 5, suggestion: 'Latest trends in AI'},
    {id: 6, suggestion: 'Latest trends in ML'},
  ]; // Make sure to define the actual data structure

  suggestInput(event: any): void {
    this.searchInput = event.target.value;
  }

  arrowEachClick(suggestion: string): void {
    this.searchInput = suggestion;
  }

  filterSuggestions(): any[] {
    return this.suggestionsList.filter(eachSuggest =>
      eachSuggest.suggestion.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }

}
