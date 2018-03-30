import { createSelector } from 'reselect';
import { mapToArray } from '../helpers';
import { IStore } from '../store'

const postersGetter = (state: IStore) => state.posters.entities;
const idGetter = (state: IStore, props: any) => props.id;

export const posterSelectorFactory =  createSelector([postersGetter, idGetter], (posters, id) => {
    return posters.get('id');
});

export const allPosterSelectorFactory = createSelector(postersGetter, (posters) => {
    return posters.filter(poster => {
        return poster;
    });
});