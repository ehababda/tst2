export default function Nav({ user }) {
    const { firstname, lastname } = user;
    return (
        <div>
            {/* <p>num1:{props.num1}</p>
            <p>num1:{props.num2}</p> */}
            {firstname}
            {lastname}
            <p>I am nav</p>
        </div>
    );
}