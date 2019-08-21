export class Post {
    constructor(title, content, loveIts) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = new Date();
    }  
    
    public title: string;
    public content: string;
    public loveIts: number;
    public created_at: Date;
}
