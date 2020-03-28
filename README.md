# Battle Simulator

My experimental use case for creating an OO-heavy project in TypeScript.

This repo is an experimental battle simulator, written in TypeScript, which which allows two "virtual armies" to fight in a make believe battle.

## Running an Example Battle

### From the Command Line

```
node build/src/exampleBattle.js
```

Optional arguments:

```
--army1=2500 --army2=2250 --rounds=10
```

### Changing Battle Specs

If you want to change the specs of the battle, such as army size or number of rounds, open the `index.ts` file and edit the variables listed under the "General Battle Config" section.

## Adding New Unit Types

1. Create a class for the unit type in the `classes/units` directory.
2. Add the unit type to the `classes/units/typeAliases.ts` typing file.
3. Make the unit spawnable within the `classes/units/types.ts` file.