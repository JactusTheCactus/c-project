use walkdir::WalkDir;

fn main() {
    for entry in WalkDir::new(".")
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.path().extension().map_or(false, |ext| ext == "c"))
    {
        println!("{}", entry.path().display());
    }
}
