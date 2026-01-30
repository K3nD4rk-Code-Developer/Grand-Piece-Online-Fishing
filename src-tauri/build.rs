use winres::WindowsResource;

fn main() {
    if cfg!(target_os = "windows") {
        let mut res = winres::WindowsResource::new();
        res.set_icon("icons/icon.ico");
        res.compile().unwrap()
    }
    tauri_build::build();
}