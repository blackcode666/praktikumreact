function Hello(props){
    //const name = "Albram boom boom pow" contoh deklarasi variable
    const {name} = props; //contoh deklarasi props

    return (
        <div>
        <h2>Hello React</h2>
        <p>Saya {name} = Frontend Enginer</p>
        </div>
        // pemanggilan jsx menggunakan {}
    );
}
export default Hello;