// The 'storeswift_buildher_app' program.
program storeswift_buildher_app.aleo {
    transition main(public a: u32, b: u32) -> u32 {
        let c: u32 = a + b;
        return c;
    }
}
