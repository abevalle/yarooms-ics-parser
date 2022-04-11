export interface fetchIcs {
    isAcceptable(s: string): boolean
}

const fetchIcs = new Promise<string>((resolve, reject) => {
    const { string } = fetch(url)
})