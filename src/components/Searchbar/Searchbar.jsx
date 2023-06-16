import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = inputName => e => {
    this.setState({
      [inputName]: e.target.value,
    });
  };

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    this.props.onSubmit({ query });
    console.log(query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.button_label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleInput('query')}
          />
        </form>
      </header>
    );
  }
}
