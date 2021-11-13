import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const NewFact = () => {
    const { data, isPending, error } = useFetch('https://catfact.ninja/fact');

    // zrobic usestate, który będzie obiektem - data = feth data i pending, bez usefetcha, bezpośrednio tutaj

    const handleSave = () => {

    }

    return (
         <div className="create">
            <div className="mt-3 container">
                { isPending && <div>Loading...</div>}
                { error && <div>{ error }</div> }
                { data && (
                    <article>
                        <h2>New cat fact!</h2>
                        <p className="lead">{data.fact}</p>
                        <div className="button-wrapper">
                            <button onClick={handleSave}>save</button>
                            <Link to="/newfact"><button>discard</button></Link>
                        </div>
                    </article>
                )}
            </div>

{/* 
            <form onSubmit={e => handleSubmit(e)}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    // each field of this form is controlled - it's value is stored in state, each has onChange function that updates the value with no downtime, and it is immediately shown on the position
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="vroeN">vroeN</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form> */}
        </div>
    );
}
 
export default NewFact;