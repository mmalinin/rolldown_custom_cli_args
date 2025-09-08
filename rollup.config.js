function createConfig()
{
    return {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle.js',
        },
    }
}

export default (commandLineArgs) => {
    console.log(commandLineArgs, typeof commandLineArgs);
    return createConfig();
};

