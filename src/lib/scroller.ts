export const scroll = (element: any, to:number) :boolean => {
    const start = element.scrollTop
    return to < start
}


