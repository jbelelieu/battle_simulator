# Battle Simulator

This repo is an experimental battle simulator, written in TypeScript, which which allows two "virtual armies" to fight in a ten round battle.

## Simulating a Battle

```
npm install
npm run build
npm run start
```

## Changing the Specs of the Battle

If you want to change the specs of the battle, such as army size or number of rounds, open the `index.ts` file and edit the variables listed under the "General Battle Config" section.

## Adding New Unit Types

1. Create a class for the unit type in the `classes/units` directory.
2. Add the unit type to the `classes/units/typeAliases.ts` typing file.
3. Make the unit spawnable within the `classes/units/types.ts` file.