Minimal example of custom cli arguments not being handled by rolldown.
Rollup supports exporting function to handle custom command line args (https://rollupjs.org/command-line-interface/#configuration-files, search for `export default commandLineArgs`):

```
export default (commandLineArgs) => {
    console.log(commandLineArgs, typeof commandLineArgs);
    return <...>;
};
```

CLI command: `rollup -c rollup.config.js --configLogLevel=silent --config_my_arg` execution completes succesfully:
```text
> rollup -c rollup.config.js --configLogLevel=silent --config_my_arg

{
  _: [],
  c: 'rollup.config.js',
  config: 'rollup.config.js',
  configLogLevel: 'silent',
  config_my_arg: true
} object
src/index.js → dist/bundle.js...
```

CLI command: `rolldown -c rollup.config.js --configLogLevel=silent --config_my_arg` build termiantes:
```text
> command_line_args_error@1.0.0 build:rolldown
> rolldown -c rollup.config.js --configLogLevel=silent --config_my_arg


 ERROR  Invalid option: --configLogLevel. We will ignore this option.
```
