interface Map{
    valueSeq?();
}

export function mapToArray(obj: Map): object[]{
    return obj.valueSeq().toArray();
}