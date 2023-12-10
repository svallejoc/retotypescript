export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   CharacterLocation;
    location: CharacterLocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export interface CharacterLocation {
    name: string;
    url:  string;
}

export interface Information {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}


export interface AllResponse{
    info: Information,
    results: Character[]
}