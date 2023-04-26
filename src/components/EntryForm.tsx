import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch,useStore } from 'react-redux';

import Input from "./Input";
import { server_calls } from '../api/server';
import { chooseTitle, chooseAuthor, chooseIsbn, chooseGenre} from '../redux/slices/RootSlice';

interface EntryFormProps{
    id?: string[],
    data?: {},
}

const EntryForm = (props: EntryFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`),
        console.log(data);
        console.log(errors);
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated ${ props.id } ${ data }`)
            setTimeout(()=> {window.location.reload()}, 1000);
            event.target.reset()
        } else {
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseIsbn(data.isbn));
            dispatch(chooseGenre(data.genre));


            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 1000);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Title' {...register('title', {required: false, maxLength: 120})} />
        <Input placeholder='Author' {...register('author', {required: false, maxLength: 80})} />
        <Input placeholder='ISBN' {...register('isbn', {required: false, maxLength: 60})} />
        <Input placeholder='Genre' {...register('genre', {required: false, maxLength: 120})} />
        <button className='submitButton'>
            <input type='submit' />
        </button>
        </form>
    );
}

export default EntryForm