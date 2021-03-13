import s from './style.module.css';
console.log('####: s', s);
const HeaderBlock = ({ title, descr }) => {
    return (
        <header class="root">
            <div class="forest"></div>
            <div class="container">
                <h1>
                    This is title
{title}
                </h1>
                <p>This is Description!{descr}</p>
            </div>
        </header>
    )
}

export default HeaderBlock;