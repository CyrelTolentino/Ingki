export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src="/images/logo.png"
            alt="My Logo"
            className="h-10 w-auto"
        />
    );
}
