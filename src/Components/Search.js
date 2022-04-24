import React, { Component } from 'react'

export class Search extends Component {

    constructor(props)
    {
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            keyword:''
        }
    }
onChange(e)
{
    this.setState({
        //input içerisindeki değer target value ile alıyoruz ve hedef olan keyword içerisine kaydediyoruz.
        keyword:e.target.value
    })
}

onSubmit(e)
{
    e.preventDefault();
    if(this.state.keyword==='')
    {
        //we are sending a msg and alerttype
        this.props.setAlert('Please write something on the input area','warning')
    }
    else {
            this.props.searchUsers(this.state.keyword);
            setTimeout(()=>
            {
                this.setState({
                    keyword:''
                });
            }
            ,1000
        )
    }


}

  render() {
    return (
        <div className="container my-3">
              
              <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.onChange} className='form-control' />
                        <div className="input-group-append">
                            <button type='submit' className='btn btn-outline-primary'>Search</button>
                        </div>
                    </div>
     
             </form>
             {this.props.showClearButton && <button className="btn btn-outline-danger btn-sm btn-block mt-2" onClick={this.props.clearUsers} >Clear Results</button> }
            
        </div>
    
    )
  }
}

export default Search