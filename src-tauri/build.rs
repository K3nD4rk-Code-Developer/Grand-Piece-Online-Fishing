fn main() {
    tauri_build::build();
    
    let backend_src = "backend.py";
    let backend_dest = format!("{}/backend.py", std::env::var("OUT_DIR").unwrap());
    std::fs::copy(backend_src, backend_dest).expect("Failed to copy backend.py");
}