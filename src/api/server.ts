const token = '597f5b45a70037f5c45a030eeba0f3d11bc21e2282524577'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://digilibrary.glitch.me/api/books`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://digilibrary.glitch.me',
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()

    },

    create: async (data: any = {} ) => {
        const response = await fetch(`https://digilibrary.glitch.me/api/books`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://digilibrary.glitch.me',
                },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://digilibrary.glitch.me/api/books/${id}`,
        {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://digilibrary.glitch.me/'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error(`Failed to update data on server.`)
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://digilibrary.glitch.me/api/books/${id}`,
        {
            method: "DELETE",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://digilibrary.glitch.me/'
            }
        })

        if (!response.ok){
            throw new Error(`Failed to delete data on server.`),
            console.log(`${id}`)
        }

        return;
    },
}