declare namespace yargs {
    type Arguments<T = {}> = import("yargs").Arguments<T>
    type Argv<T = {}> = import("yargs").Argv<T>
    type CommandModule<T = {}, U = {}> = import("yargs").CommandModule<T, U>
}
