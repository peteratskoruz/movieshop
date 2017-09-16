export class Movie{
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public genre: Array<string>,
        public imgUrl: string
    ){}
}