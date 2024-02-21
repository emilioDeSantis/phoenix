

type LoadingScreenProps = {
    // handleEnterSite: () => void;
};

const LoadingScreen: React.FC <LoadingScreenProps> = () => {
    return (
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'black', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            zIndex: 10,
        }}>
            {/* Loading screen content here, like a spinner or logo */}
            <p style={{ color: 'white' }}>Loading...</p>
        </div>
    );
}

export default LoadingScreen;
